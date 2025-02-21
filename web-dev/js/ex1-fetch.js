async function get () {
  try {
    const resp = await fetch('https://httpbin.org/get', {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Accept: 'application/json'
      }
    })
    if (!resp.ok) {
      const errText = await resp.text()
      throw new Error(`请求失败: ${resp.status} ${errText}`)
    }
    return await resp.json()
  } catch (e) {
    console.log(e)
  }
}

async function getWithQuery () {
  const url = new URL('https://api.modrinth.com/v2/search')
  url.searchParams.set('limit', 3)
  url.searchParams.set('query', 'tps')
  url.searchParams.set('facets', '[["project_type:mod"],["versions:1.21.4","versions:1.21.3","versions:1.21.2","versions:1.21.1","versions:1.21"],["categories:fabric"]]')

  try {
    const resp = await fetch(url)
    if (!resp.ok) {
      const errText = await resp.text()
      throw new Error(`请求失败: ${resp.status} ${errText}`)
    }
    return await resp.json()
  } catch (e) {
    console.log(e)
  }
}

async function post () {
  const lilei = {
    name: 'lilei',
    age: 12
  }
  try {
    const resp = await fetch('https://httpbin.org/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Accept: 'application/json'
      },
      body: JSON.stringify(lilei)
    })
    if (!resp.ok) {
      const errText = await resp.text()
      throw new Error(`请求失败: ${resp.status} ${errText}`)
    }
    return await resp.json()
  } catch (e) {
    console.log(e)
  }
}

async function main () {
  const respGet = await get()
  console.log('respGet:', respGet)
  const respGetWithQuery = await getWithQuery()
  console.log('respGetWithQuery:', respGetWithQuery)
  const respPost = await post()
  console.log('respPost:', respPost)
}

await main()
