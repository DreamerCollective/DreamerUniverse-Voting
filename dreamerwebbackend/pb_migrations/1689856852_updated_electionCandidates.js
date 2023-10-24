migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2nrtp0ib274oomx")

  // remove
  collection.schema.removeField("yj7gk552")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2nrtp0ib274oomx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yj7gk552",
    "name": "candidateElections",
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
})
