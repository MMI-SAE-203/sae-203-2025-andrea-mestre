/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text4286007220",
        "max": 0,
        "min": 0,
        "name": "titre",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "file3828436749",
        "maxSelect": 1,
        "maxSize": 0,
        "mimeTypes": [],
        "name": "affiche",
        "presentable": false,
        "protected": false,
        "required": false,
        "system": false,
        "thumbs": [],
        "type": "file"
      },
      {
        "hidden": false,
        "id": "date3633048593",
        "max": "",
        "min": "",
        "name": "date_sortie",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "date"
      },
      {
        "hidden": false,
        "id": "number2220277813",
        "max": null,
        "min": null,
        "name": "duree",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "select2471982478",
        "maxSelect": 1,
        "name": "langue",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "Français",
          "Anglais"
        ]
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text1200832254",
        "max": 0,
        "min": 0,
        "name": "realisateur",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "date3540240272",
        "max": "",
        "min": "",
        "name": "date_heure_projection",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "date"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text3092788652",
        "max": 0,
        "min": 0,
        "name": "acteurs",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "select1318551132",
        "maxSelect": 2,
        "name": "salle",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "1",
          "2",
          "3",
          "4"
        ]
      },
      {
        "hidden": false,
        "id": "select2203071480",
        "maxSelect": 2,
        "name": "genre",
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
          "espionnage",
          "Thriller"
        ]
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text1462424745",
        "max": 0,
        "min": 0,
        "name": "synopsis",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "file4182342110",
        "maxSelect": 1,
        "maxSize": 0,
        "mimeTypes": [],
        "name": "bande_annonce",
        "presentable": false,
        "protected": false,
        "required": false,
        "system": false,
        "thumbs": [],
        "type": "file"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_4042354073",
        "hidden": false,
        "id": "relation167749844",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "participe",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "autodate2990389176",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "autodate3332085495",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_95057082",
    "indexes": [],
    "listRule": null,
    "name": "films",
    "system": false,
    "type": "base",
    "updateRule": null,
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_95057082");

  return app.delete(collection);
})
