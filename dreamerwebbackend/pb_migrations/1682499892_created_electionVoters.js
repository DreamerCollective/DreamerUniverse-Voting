migrate((db) => {
  const collection = new Collection({
    "id": "w7p6dwff5ge10f3",
    "created": "2023-04-26 09:04:52.513Z",
    "updated": "2023-04-26 09:04:52.513Z",
    "name": "electionVoters",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ettyuoad",
        "name": "attachedUsers",
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
  const collection = dao.findCollectionByNameOrId("w7p6dwff5ge10f3");

  return dao.deleteCollection(collection);
})
