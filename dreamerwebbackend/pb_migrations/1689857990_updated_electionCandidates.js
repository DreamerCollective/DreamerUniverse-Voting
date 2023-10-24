migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2nrtp0ib274oomx")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "no12j31j",
    "name": "candidateIssues",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "12vwjv5vdwakufc",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2nrtp0ib274oomx")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "no12j31j",
    "name": "candidateIssue",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "12vwjv5vdwakufc",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
