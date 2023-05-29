migrate((db) => {
  const collection = new Collection({
    "id": "yygirzv126nb8cr",
    "created": "2023-05-26 05:09:16.968Z",
    "updated": "2023-05-26 05:09:16.968Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "w12fimva",
        "name": "title",
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
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("yygirzv126nb8cr");

  return dao.deleteCollection(collection);
})
