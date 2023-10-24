migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2nrtp0ib274oomx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "88fdup3p",
    "name": "candidateName",
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
    "id": "r7kkpcdo",
    "name": "candidateDescription",
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
  const collection = dao.findCollectionByNameOrId("2nrtp0ib274oomx")

  // remove
  collection.schema.removeField("88fdup3p")

  // remove
  collection.schema.removeField("r7kkpcdo")

  return dao.saveCollection(collection)
})
