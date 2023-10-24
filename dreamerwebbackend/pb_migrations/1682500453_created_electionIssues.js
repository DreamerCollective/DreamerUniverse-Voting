migrate((db) => {
  const collection = new Collection({
    "id": "12vwjv5vdwakufc",
    "created": "2023-04-26 09:14:13.424Z",
    "updated": "2023-04-26 09:14:13.424Z",
    "name": "electionIssues",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sy9x1d9v",
        "name": "issueTitle",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "oob86nx3",
        "name": "issueDescription",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("12vwjv5vdwakufc");

  return dao.deleteCollection(collection);
})
