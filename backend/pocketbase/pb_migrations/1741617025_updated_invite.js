/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4042354073")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1819170229",
    "max": 0,
    "min": 0,
    "name": "nom",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2787480667",
    "max": 0,
    "min": 0,
    "name": "prenom",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "file347571224",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "photo",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3341207218",
    "max": 0,
    "min": 0,
    "name": "biographie",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "number3467569840",
    "max": null,
    "min": null,
    "name": "date_naissance",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select4283539469",
    "maxSelect": 11,
    "name": "metiers",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Action",
      "aventure Science-fiction",
      "thriller Drame",
      "romance Comédie",
      "musical Fantastique",
      "horreur Policier",
      "mystère Western",
      "historique Animation",
      "famille Documentaire",
      "biopic Guerre",
      "espionnage"
    ]
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4164619532",
    "hidden": false,
    "id": "relation1572177727",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "anime_activite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_95057082",
    "hidden": false,
    "id": "relation1150396910",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "participe_film",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4042354073")

  // remove field
  collection.fields.removeById("text1819170229")

  // remove field
  collection.fields.removeById("text2787480667")

  // remove field
  collection.fields.removeById("file347571224")

  // remove field
  collection.fields.removeById("text3341207218")

  // remove field
  collection.fields.removeById("number3467569840")

  // remove field
  collection.fields.removeById("select4283539469")

  // remove field
  collection.fields.removeById("relation1572177727")

  // remove field
  collection.fields.removeById("relation1150396910")

  return app.save(collection)
})
