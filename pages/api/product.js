// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    products: [
    {product_id: 1, url: "/product/1", title: "Product A", image: "https://picsum.photos/200"},
    {product_id: 2, url: "/product/2", title: "Gizmo B", image: "https://picsum.photos/200"},
    {product_id: 3, url: "/product/3", title: "Widget C", image: "https://picsum.photos/200"},
    {product_id: 5, url: "/product/5", title: "Subscription E", image: "https://picsum.photos/200"},
    {product_id: 4, url: "/product/4", title: "Magazine D", image: "https://picsum.photos/200"},
    {product_id: 6, url: "/product/6", title: "Ticket F", image: "https://picsum.photos/200"}
    ]
    })
}
