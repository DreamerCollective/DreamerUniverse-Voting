/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nee889o30va5alo")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tvrpqwav",
    "name": "electionoptions",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nee889o30va5alo")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tvrpqwav",
    "name": "electionoptions",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "pxb7fmjquvztl95",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
