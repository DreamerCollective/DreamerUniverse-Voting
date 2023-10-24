/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("pxb7fmjquvztl95");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "pxb7fmjquvztl95",
    "created": "2023-04-26 08:59:00.453Z",
    "updated": "2023-08-23 13:07:56.654Z",
    "name": "electionOptions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dzml64sx",
        "name": "candidatesNumber",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "ky2an6u6",
        "name": "candidatesCanWin",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "jbk25lxx",
        "name": "percentageCandidatesMustWin",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "4ckc62jk",
        "name": "howManyVoters",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "6oasm8q7",
        "name": "howManyVotesPerVoter",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "quys2iif",
        "name": "howManyRounds",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "wwsugs1r",
        "name": "canYouVoteForParties",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "q0wzj8du",
        "name": "doVotesTransfer",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "f8mv6h6i",
        "name": "votersMustVote",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "aqndjjjw",
        "name": "dateElectionStarts",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
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
})
