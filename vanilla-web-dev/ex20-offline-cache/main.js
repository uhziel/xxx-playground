const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        'sw.js',
        {
          scope: './',
        }
      );
      if (registration.installing) {
        console.log('Service worker installing');
      } else if (registration.waiting) {
        console.log('Service worker installed');
      } else if (registration.active) {
        console.log('Service worker active');
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
}

registerServiceWorker()

async function request(url) {
  const response = await fetch(url, {
    method: 'GET',
    mode: "cors",
  })

  if (!response.ok) {
    const err = await response.text()
    throw new Error(`${err}`)
  }

  if (response.status === 204) {
    return null;
  }

  if (response.headers.get("Content-Type")?.indexOf("text/plain") !== -1) {
    return response.text()
  }

  return response.json()
}

function parseMinecraftVersionsResult(result) {
  const versions = []
  for (const version of result.versions) {
    if (version.type === "release") {
      versions.push(version.id)
    }
  }
  return versions
}

async function getMinecraftVersions() {
  let versions = []

  try {
    const result = await request("https://launchermeta.mojang.com/mc/game/version_manifest.json")

    versions = parseMinecraftVersionsResult(result)
  } catch (e) {
    console.error("getMinecraftVersions", e)
  }

  return versions
}

async function fetchMinecraftVersions() {
  const versions = await getMinecraftVersions()

  const output = document.getElementById("output")
  output.textContent = versions.join("\n")
}
