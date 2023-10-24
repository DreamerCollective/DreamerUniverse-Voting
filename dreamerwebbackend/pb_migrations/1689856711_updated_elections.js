migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nee889o30va5alo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ayjcxjqm",
    "name": "electioncandidates",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "2nrtp0ib274oomx",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bzkhangr",
    "name": "electionparties",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "h7hxjovpdsm9zzl",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vq2am0xq",
    "name": "electionvoters",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "w7p6dwff5ge10f3",
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

  // remove
  collection.schema.removeField("ayjcxjqm")

  // remove
  collection.schema.removeField("bzkhangr")

  // remove
  collection.schema.removeField("vq2am0xq")

  return dao.saveCollection(collection)
})
