async function get() {
  try {
    const resp = await fetch("https://httpbin.org/get", {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Accept": "application/json",
      },
    })
    if (!resp.ok) {
      const errText = await resp.text()
      throw new Error(`请求失败: ${resp.status} ${errText}`)
    }
    return await resp.json()
  } catch(e) {
    console.log(e)
  }
}

async function main() {
  const respGet = await get()
  console.log("respGet:", respGet)
}

await main()
