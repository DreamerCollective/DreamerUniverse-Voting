migrate((db) => {
  const collection = new Collection({
    "id": "h7hxjovpdsm9zzl",
    "created": "2023-04-26 09:07:01.721Z",
    "updated": "2023-04-26 09:07:01.721Z",
    "name": "electionParties",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rbdxniyk",
        "name": "attachedCandidates",
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("h7hxjovpdsm9zzl");

  return dao.deleteCollection(collection);
})
