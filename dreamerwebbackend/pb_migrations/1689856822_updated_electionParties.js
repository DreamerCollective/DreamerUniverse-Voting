migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h7hxjovpdsm9zzl")

  // remove
  collection.schema.removeField("j5gbvlyr")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h7hxjovpdsm9zzl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j5gbvlyr",
    "name": "partyElections",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "pxb7fmjquvztl95",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
