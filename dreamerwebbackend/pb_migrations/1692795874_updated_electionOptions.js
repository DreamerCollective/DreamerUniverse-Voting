/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pxb7fmjquvztl95")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jbk25lxx",
    "name": "percentageCandidatesMustWin",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pxb7fmjquvztl95")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jbk25lxx",
    "name": "percentageCnadidatesMustWin",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
