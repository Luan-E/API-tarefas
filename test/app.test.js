const test = require("node:test")
const assert = require("node:assert")
const app = require("../app")

test("GET / responde 200 com mensagem", async (t) => {
    const server = app.listen(0)
    t.after(() => server.close())

    const { port } = server.address()
    const res = await fetch(`http://localhost:${port}/`)
    const body = await res.json()

    assert.strictEqual(res.status, 200)
    assert.strictEqual(body.mensagem, "Rota / funcionando!")
})