migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pxb7fmjquvztl95")

  collection.name = "electionOptions"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pxb7fmjquvztl95")

  collection.name = "electionoptions"

  return dao.saveCollection(collection)
})
