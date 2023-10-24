migrate((db) => {
  const collection = new Collection({
    "id": "nee889o30va5alo",
    "created": "2023-07-20 12:35:29.179Z",
    "updated": "2023-07-20 12:35:29.179Z",
    "name": "elections",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tvrpqwav",
        "name": "electionoptions",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "pxb7fmjquvztl95",
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
  const collection = dao.findCollectionByNameOrId("nee889o30va5alo");

  return dao.deleteCollection(collection);
})
