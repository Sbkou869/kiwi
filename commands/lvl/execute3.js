module.exports = ({
      name: "$alwaysExecute",
    code: `$setUserVar[msg;$sum[$getUserVar[msg];1]]`
});