/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4042354073")

  // remove field
  collection.fields.removeById("number3467569840")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "date3467569840",
    "max": "",
    "min": "",
    "name": "date_naissance",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4042354073")

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

  // remove field
  collection.fields.removeById("date3467569840")

  return app.save(collection)
})
