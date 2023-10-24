/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nee889o30va5alo")

  // remove
  collection.schema.removeField("tvrpqwav")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cvuitwek",
    "name": "candidateNumber",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "edzrwhiy",
    "name": "candidatesCanWin",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lbhayivl",
    "name": "percentageCandidatesMustWin",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 100
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ytpqt1ba",
    "name": "howManyVoters",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g7c3aujq",
    "name": "howManyVotesPerVoter",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x3v0xrkt",
    "name": "howManyRounds",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v3pffo5s",
    "name": "canYouVoteForParties",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kq6192ds",
    "name": "doVotesTransfer",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dxfxjffw",
    "name": "votersMustVote",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vk7zhkxm",
    "name": "dateElectionStarts",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nee889o30va5alo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tvrpqwav",
    "name": "electionoptions",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "pxb7fmjquvztl95",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // remove
  collection.schema.removeField("cvuitwek")

  // remove
  collection.schema.removeField("edzrwhiy")

  // remove
  collection.schema.removeField("lbhayivl")

  // remove
  collection.schema.removeField("ytpqt1ba")

  // remove
  collection.schema.removeField("g7c3aujq")

  // remove
  collection.schema.removeField("x3v0xrkt")

  // remove
  collection.schema.removeField("v3pffo5s")

  // remove
  collection.schema.removeField("kq6192ds")

  // remove
  collection.schema.removeField("dxfxjffw")

  // remove
  collection.schema.removeField("vk7zhkxm")

  return dao.saveCollection(collection)
})
