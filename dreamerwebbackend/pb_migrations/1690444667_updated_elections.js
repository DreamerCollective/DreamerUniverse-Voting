migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nee889o30va5alo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bzumlizz",
    "name": "electionname",
    "type": "text",
    "required": true,
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
    "id": "axvzrobv",
    "name": "electionsubtitle",
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
    "id": "xha0igip",
    "name": "electiondescription",
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
  const collection = dao.findCollectionByNameOrId("nee889o30va5alo")

  // remove
  collection.schema.removeField("bzumlizz")

  // remove
  collection.schema.removeField("axvzrobv")

  // remove
  collection.schema.removeField("xha0igip")

  return dao.saveCollection(collection)
})
