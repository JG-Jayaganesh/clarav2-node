var aerospikeClusterIP = '127.0.0.1';
var aerospikeClusterPort = 3000;
//var aerospikeClusterUser = 'azureuser';
//var aerospikeClusterPassword = 'Azureuser001';

exports.aerospikeConfig = function (db_details) {
  var ASClusterIP,
      ASClusterPort;
  if(db_details != undefined){
    ASClusterIP = db_details.clusterIP || aerospikeClusterIP;
    ASClusterPort = db_details.clusterPort || aerospikeClusterPort;
  } else {
    ASClusterIP = aerospikeClusterIP;
    ASClusterPort = aerospikeClusterPort;
  }
  return {
    hosts: [ { addr: aerospikeClusterIP, port: aerospikeClusterPort} ]
  }
}

exports.aerospikeDBParams = function (db_params) {
  var nameSpace,
      set_name;
  if(db_params != undefined){
    nameSpace = db_params.nameSpace || 'test';
    set_name = db_params.set || 'test';
  } else{
    nameSpace = 'test';
    set_name = 'test';
  }

  return {
    defaultNamespace: nameSpace,
    defaultSet: set_name
  }
}
