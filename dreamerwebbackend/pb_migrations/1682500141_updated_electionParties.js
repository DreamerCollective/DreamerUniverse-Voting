migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h7hxjovpdsm9zzl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z9pw4xwm",
    "name": "partyName",
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
    "id": "xjwzywd1",
    "name": "partyDescription",
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
  const collection = dao.findCollectionByNameOrId("h7hxjovpdsm9zzl")

  // remove
  collection.schema.removeField("z9pw4xwm")

  // remove
  collection.schema.removeField("xjwzywd1")

  return dao.saveCollection(collection)
})
