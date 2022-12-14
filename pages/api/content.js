// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    data: [
    {type: "html", contents: "<p>Example HTML text.</p>", position: "row-1"},
    {type: "html", contents: "<p>Some other content.</p>", position: 3}
    ]
    })
}
