import { useState, useEffect } from "react";
import styles from '../../styles/Home.module.css'
import { Grid, Paper, styled } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default  function ContentGrid() {
    const [ dataItems, setDataItems ] = useState([1,2])

    useEffect(() => {

        const fetchData = async () => {
            const contentResponse = await fetch('api/content')
            if (!contentResponse || contentResponse.status !== 200) {
                console.error('Cannot fetch content data')
            }
            let contentList = await contentResponse.json()
            contentList = contentList.data
            //console.log(contentList)

            const productResponse = await fetch('api/product')
            if (!productResponse || productResponse.status !== 200) {
                console.error('Cannot fetch product data')
            }
            let productList = await productResponse.json()
            productList = productList.products
            //console.log(productList)
            
            const dataListLength = contentList.length + productList.length
            const dataList = new Array(dataListLength)

            for (let i = 0; i< contentList.length; i++) {
                let position 
                let fullRow = false
                if (typeof contentList[i].position === 'number' ) {
                    position = contentList[i].position
                } else {
                    position = parseInt(contentList[i].position.split('-')[1]) - 1
                    fullRow = true
                }

                 dataList[position] =  { data: contentList[i].contents, fullRow }
            }

            let dataListIndex = 0

            for (let j=0; j< productList.length; j++) {
                while(dataList[dataListIndex]) {
                    dataListIndex++
                }
                dataList[dataListIndex] = { data: productList[j].title, fullRow: false }
            }

            setDataItems(dataList)
            console.log('--dataItems--')
            console.log(dataItems)

        }
       
        fetchData()
        .catch(console.error)
        
       },[]);  

  if (!dataItems || dataItems.length === 0) {
    return (
        <div>
         No data found
        </div>
    )
  }

  return (
    <div className={styles.container}>

      <main className={styles.main}>
        

        <Grid container spacing={1}>
        { dataItems.map((dataItem, index) => {
            return dataItem.fullRow ? (
                <Grid item xs={12} md={12} sm={12}  key={index}>
                    <Item>{dataItem.data}</Item>
                </Grid>

            ) : (
                <Grid item xs={12} md={4} sm={4} key={index}>
                    <Item>{dataItem.data}</Item>
                </Grid>

            )
        })}
        </Grid>

      </main>
    </div>
  )
}


