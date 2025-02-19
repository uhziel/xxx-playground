function tryCatchFinally() {
  console.log("## test try-catch-finally")

  try {
    console.log("do work")
    return 1
    console.log("do extra work")
  } catch {
    console.log("catch")
  } finally {
    console.log("cleanup")
  }
}

function tryCatch() {
  console.log("## test try-catch")
  try {
    console.log("do work")
    return 1
    console.log("do extra work")
  } catch {
    console.log("catch")
  }
  console.log("cleanup")
}

async function request(url) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      const errText = await response.text()
      throw new Error(`业务错误信息: ${response.status} ${errText}`)
    }
    return await response.json()
  } catch (e) {
    if (e instanceof TypeError) {
      console.log(`${e.message}`)
    } else {
      throw e
    }
  }
}

function main() {
  // cleanup 工作应放入 finally 中
  tryCatchFinally()
  tryCatch()
}

main()

const resp = await request("https://httpbin.org/get")
console.log("resp:", resp)
