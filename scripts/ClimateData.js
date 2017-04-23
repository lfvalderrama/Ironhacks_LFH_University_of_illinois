$.ajax({
			 url: "https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GSOM&locationid=CITY:US170006&startdate=2015-01-01&enddate=2017-04-01&datatypeid=TAVG&units=standard&limit=1000",
			 method: "GET",
			 headers:{ token: 'LYDhZtiCkOKCehyTCkoaSKiSpUlCVqLN' },
			 datatype: "json",
			 success: function (result) {
						var Data = result;
						var info = Data.results;
            var TAVG=0;
            for (var i=0; i<info.length; i++){
              TAVG+=info[i].value;
            }
            TAVG/=info.length
						document.getElementById("Temp").innerHTML = "<h4 allign="+'"'+"center"+'"'+">The average temperature in the city of chicago since january 2015 untill today is: " + TAVG +"ºF</h4>";
		}});
