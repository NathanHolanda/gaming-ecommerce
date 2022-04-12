import { ActiveModelSerializer, createServer, Model, Response } from "miragejs"
import products from "./products.json"

interface Product{
  id: string,
  name: string,
  price: number,
  score: number,
  image: string
}

function mirageServer() {
  let server = createServer({
    serializers: {
      application: ActiveModelSerializer
    },

    models: {
      product: Model.extend<Partial<Product>>({}),
    },

    seeds(server) {
      products.forEach(product => {
        const { id, name, price, score, image } = product

        server.create("product", {
          id: String(id),
          name,
          price,
          score,
          image
        })
      })
    },

    routes() {
      this.namespace = "api"
      this.timing = 750

      this.get("/products", (schema, request) => {
        const { page = 1 } = request.queryParams
        const perPage = 3 

        const pageStart = (Number(page) - 1) * Number(perPage)
        const pageEnd = Number(pageStart) + Number(perPage)

        const products = schema.all("product").models
        .slice(pageStart, pageEnd)

        return new Response(200, {}, { products })
      })

      this.namespace = ""
      this.passthrough()
    },
  })

  return server
}

export { mirageServer }