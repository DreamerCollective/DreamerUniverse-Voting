/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nee889o30va5alo")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cvuitwek",
    "name": "numberOfCandidates",
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
  const collection = dao.findCollectionByNameOrId("nee889o30va5alo")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cvuitwek",
    "name": "numberofCandidates",
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
