import fs from 'fs'

const sourcePath = 'API'
const sourceFilePath = `${sourcePath}/data.json`
const languages = ['es', 'en']

const readJsonData = callback => {
  fs.readFile(sourceFilePath, 'utf-8', (err, res) => {
    if (err) throw err
    const data = JSON.parse(res.toString())
    callback(data)
  })
}

const cleanUp = (data, key, languages) => {
  languages.forEach(language => delete data[`${language}-${key}`])
}

const translate = (data, language) => {
  Object.keys(data).forEach(key => {
    if (typeof key === 'string' && key.includes('-')) {
      const lngKey = key.split('-')
      if (lngKey[0] === language) {
        data[lngKey[1]] = data[key]
        cleanUp(data, lngKey[1], languages)
      }
    }
    else if (typeof data[key] === 'object') {
      if (Array.isArray(data[key])) {
        data[key].map(e => { translate(e, language) })
      } else {
        translate(data[key], language)
      }
    }
  })
}

const saveJson = (data, language) => {
  fs.writeFile(`${sourcePath}/${language}-data.json`, JSON.stringify(data), err => {
    if (err) throw err
  })
}

const removeFiles = languages => {
  languages.forEach(language => {
    try {
      fs.unlinkSync(`${sourcePath}/${language}-data.json`)
    } catch (err) {
      console.error(err)
    }
  })
}

const run = () => {
  readJsonData(data => {
    removeFiles(languages)
    languages.forEach(language => {
      const languageData = JSON.parse(JSON.stringify(data))
      translate(languageData, language)
      saveJson(languageData, language)
    })
  })
}

run()
