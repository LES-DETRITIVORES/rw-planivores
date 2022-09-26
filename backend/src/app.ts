import express, { Request, Response, Express } from 'express'
import cors from 'cors'
import multer, { diskStorage, StorageEngine } from 'multer'
import fs from 'fs'
import csv from 'csvtojson'

const app: Express = express()
const port: number = 5000

const storage: StorageEngine = diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb) => {
    cb(null, './src/uploads/')
    req.body.file = file
    console.log(file)
  },
  filename: (req: Request, file: Express.Multer.File, cb) => {
    cb(null, file.originalname)
    req.body.file = file
  },
})

const upload = multer({ storage: storage })

app.use(cors())

app.post('/uploads', upload.single('file'), (req: Request, res: Response) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  const { id } = req.query
  res.status(200).send({ message: 'File uploaded successfully' })
  if (req.body.file.mimetype === 'application/pdf') {
    fs.renameSync(
      `./src/uploads/${req.body.file.originalname}`,
      `./src/uploads/upload-${id}.pdf`
    )
  } else if (req.body.file.mimetype === 'text/csv') {
    fs.renameSync(
      `./src/uploads/${req.body.file.originalname}`,
      `./src/uploads/upload-${id}.csv`
    )
  }
  console.log(req.file)
})
app.get('/read', upload.single('file'), (req: Request, res: Response) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  const { id } = req.query

  if (req.body.file.mimetype === 'application/pdf') {
    fs.readFileSync(`./src/uploads/upload-${id}.pdf`)
    res.status(200).send({ message: 'File read successfully' })
  } else if (req.body.file.mimetype === 'text/csv') {
    fs.readFileSync(`./src/uploads/upload-${id}.csv`)
    res.status(200).send({ message: 'File read successfully' })
  }
})

app.get('/convert', (req: Request, res: Response) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  const { id } = req.query
  csv()
    .fromFile(`./src/uploads/upload-${id}.csv`)
    .then((data: any) => {
      res.status(200).send(data)
      fs.writeFileSync(`./src/uploads/upload-${id}.json`, JSON.stringify(data))
    })
})
app.listen(port, () => console.log(`API listening at ${port}`))