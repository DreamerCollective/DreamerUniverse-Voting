migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h7hxjovpdsm9zzl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rudbctu0",
    "name": "candidateIssues",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "12vwjv5vdwakufc",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h7hxjovpdsm9zzl")

  // remove
  collection.schema.removeField("rudbctu0")

  return dao.saveCollection(collection)
})
