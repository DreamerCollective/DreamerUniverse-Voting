/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pxb7fmjquvztl95")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f8mv6h6i",
    "name": "votersMustVote",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pxb7fmjquvztl95")

  // remove
  collection.schema.removeField("f8mv6h6i")

  return dao.saveCollection(collection)
})
