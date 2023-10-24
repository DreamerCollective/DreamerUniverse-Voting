migrate((db) => {
  const collection = new Collection({
    "id": "2nrtp0ib274oomx",
    "created": "2023-04-26 09:06:12.600Z",
    "updated": "2023-04-26 09:06:12.600Z",
    "name": "electionCandidates",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wesdg3sh",
        "name": "attachedUser",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
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
  const collection = dao.findCollectionByNameOrId("2nrtp0ib274oomx");

  return dao.deleteCollection(collection);
})
