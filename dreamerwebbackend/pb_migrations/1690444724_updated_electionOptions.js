migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pxb7fmjquvztl95")

  // remove
  collection.schema.removeField("etia2f8p")

  // remove
  collection.schema.removeField("kqzogucj")

  // remove
  collection.schema.removeField("ythwcxqy")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pxb7fmjquvztl95")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "etia2f8p",
    "name": "electionName",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kqzogucj",
    "name": "electionSubtitle",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ythwcxqy",
    "name": "electionInformation",
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
})
