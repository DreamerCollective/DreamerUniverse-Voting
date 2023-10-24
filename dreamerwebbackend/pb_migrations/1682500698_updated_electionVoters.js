migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w7p6dwff5ge10f3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "btdbrg54",
    "name": "voterName",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w7p6dwff5ge10f3")

  // remove
  collection.schema.removeField("btdbrg54")

  return dao.saveCollection(collection)
})
