<<<<<<< HEAD
//
// Vivado(TM)
// rundef.js: a Vivado-generated Runs Script for WSH 5.1/5.6
// Copyright 1986-2020 Xilinx, Inc. All Rights Reserved.
//

var WshShell = new ActiveXObject( "WScript.Shell" );
var ProcEnv = WshShell.Environment( "Process" );
var PathVal = ProcEnv("PATH");
if ( PathVal.length == 0 ) {
  PathVal = "C:/APPZ/Xilinx/Vivado/2020.1/ids_lite/ISE/bin/nt64;C:/APPZ/Xilinx/Vivado/2020.1/ids_lite/ISE/lib/nt64;C:/APPZ/Xilinx/Vivado/2020.1/bin;";
} else {
  PathVal = "C:/APPZ/Xilinx/Vivado/2020.1/ids_lite/ISE/bin/nt64;C:/APPZ/Xilinx/Vivado/2020.1/ids_lite/ISE/lib/nt64;C:/APPZ/Xilinx/Vivado/2020.1/bin;" + PathVal;
}

ProcEnv("PATH") = PathVal;

var RDScrFP = WScript.ScriptFullName;
var RDScrN = WScript.ScriptName;
var RDScrDir = RDScrFP.substr( 0, RDScrFP.length - RDScrN.length - 1 );
var ISEJScriptLib = RDScrDir + "/ISEWrap.js";
eval( EAInclude(ISEJScriptLib) );


ISEStep( "vivado",
         "-log Top1.vds -m64 -product Vivado -mode batch -messageDb vivado.pb -notrace -source Top1.tcl" );



function EAInclude( EAInclFilename ) {
  var EAFso = new ActiveXObject( "Scripting.FileSystemObject" );
  var EAInclFile = EAFso.OpenTextFile( EAInclFilename );
  var EAIFContents = EAInclFile.ReadAll();
  EAInclFile.Close();
  return EAIFContents;
}
=======
//
// Vivado(TM)
// rundef.js: a Vivado-generated Runs Script for WSH 5.1/5.6
// Copyright 1986-2020 Xilinx, Inc. All Rights Reserved.
//

var WshShell = new ActiveXObject( "WScript.Shell" );
var ProcEnv = WshShell.Environment( "Process" );
var PathVal = ProcEnv("PATH");
if ( PathVal.length == 0 ) {
  PathVal = "C:/APPZ/Xilinx/Vivado/2020.1/ids_lite/ISE/bin/nt64;C:/APPZ/Xilinx/Vivado/2020.1/ids_lite/ISE/lib/nt64;C:/APPZ/Xilinx/Vivado/2020.1/bin;";
} else {
  PathVal = "C:/APPZ/Xilinx/Vivado/2020.1/ids_lite/ISE/bin/nt64;C:/APPZ/Xilinx/Vivado/2020.1/ids_lite/ISE/lib/nt64;C:/APPZ/Xilinx/Vivado/2020.1/bin;" + PathVal;
}

ProcEnv("PATH") = PathVal;

var RDScrFP = WScript.ScriptFullName;
var RDScrN = WScript.ScriptName;
var RDScrDir = RDScrFP.substr( 0, RDScrFP.length - RDScrN.length - 1 );
var ISEJScriptLib = RDScrDir + "/ISEWrap.js";
eval( EAInclude(ISEJScriptLib) );


ISEStep( "vivado",
         "-log Top1.vds -m64 -product Vivado -mode batch -messageDb vivado.pb -notrace -source Top1.tcl" );



function EAInclude( EAInclFilename ) {
  var EAFso = new ActiveXObject( "Scripting.FileSystemObject" );
  var EAInclFile = EAFso.OpenTextFile( EAInclFilename );
  var EAIFContents = EAInclFile.ReadAll();
  EAInclFile.Close();
  return EAIFContents;
}
>>>>>>> c17b8d332056b76699cee9e89a02abf2d73a1711
