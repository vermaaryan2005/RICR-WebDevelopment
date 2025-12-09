function AddData() {
  const Site = document.getElementById("siteName").value.trim();
  const UN = document.getElementById("userName").value.trim();
  const PS = document.getElementById("password").value.trim();

  const DataPacket = {
    webSite: Site,
    userName: UN,
    password: PS,
  };

  console.log(DataPacket);
  const Data = JSON.parse(localStorage.getItem("PasswordManager")) || [];
  localStorage.setItem("PasswordManager", JSON.stringify(DataPacket));

  document.getElementById("siteName").value = "";
  document.getElementById("userName").value = "";
  document.getElementById("password").value = "";
}

function DownlaodFile() {
  const Data = JSON.parse(localStorage.getItem("PasswordManager")) || [];
  if (Data.length <= 0) {
    alert("No Data Found");
    return;
  }

  const headers = Object.keys(Data[0]).join(",") + "\n";
  const rows = Data.map((item) => Object.values(item).join(",")).join("\n");


  const CSVContent = headers + rows ;

  const blob = new Blob([CSVContent],{type: "text/csv"});

  const ancorhTag = document.createElement("a");

  anchorTag.href==URL.createObjectURL(blob);
  anchorTag.download
}
