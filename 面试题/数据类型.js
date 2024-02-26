const str = `host1 host2 host[1-4][2-9]`;

const replacePatternInHosts = (rawHostNames) => {
  let start,
    end,
    extra,
    allHostNames = [];
  rawHostNames.forEach(function (rawHostName) {
    let hostNames = [];
    start = rawHostName.match(/\[\d*/);
    end = rawHostName.match(/\-\d*]/);
    extra = { 0: "" };

    start = start[0].substring(1);
    end = end[0].substring(1);

    if (parseInt(start) <= parseInt(end, 10) && parseInt(start, 10) >= 0) {
      if (start[0] == "0" && start.length > 1) {
        extra = start.match(/0*/);
      }

      for (let i = parseInt(start, 10); i < parseInt(end, 10) + 1; i++) {
        hostNames.push(
          rawHostName.replace(
            /\[\d*\-\d*\]/,
            extra[0].substring(0, start.length - i.toString().length) + i
          )
        );
      }
    } else {
      hostNames.push(rawHostName);
    }
    allHostNames = allHostNames.concat(hostNames);
  });

  return allHostNames;
};

const parseHostNamesAsPatternExpression = (hostNamesStr) => {
  let hostNames = [];
  const hostNameArr = hostNamesStr.replace(/\n|\r\n|\s/g, ",").split(",");
  hostNameArr.forEach((a) => {
    let allPatterns = a.match(/\[\d*\-\d*\]/g);
    patternsNumber = allPatterns ? allPatterns.length : 0;
    let hn = [a];
    if (patternsNumber) {
      for (let i = 0; i < patternsNumber; i++) {
        hn = replacePatternInHosts(hn);
      }
      hostNames = hostNames.concat(hn);
    } else {
      hostNames.push(a);
    }
  });
  return Array.from(new Set(hostNames)).join("\n");
};

console.log(" :>> ", parseHostNamesAsPatternExpression(str));

// const parseHostNamesAsPatternExpression : function () {
//     this.set('isPattern', false);
//     var hostNames = [];

//     this.get('hostNameArr').forEach(function (a) {
//       var hn,
//           allPatterns = a.match(/\[\d*\-\d*\]/g),
//           patternsNumber = allPatterns ? allPatterns.length : 0;

//       if (patternsNumber) {
//         hn = [a];
//         for (var i = 0; i < patternsNumber; i++) {
//           hn = this._replacePatternInHosts(hn);
//         }
//         hostNames = hostNames.concat(hn);
//       } else {
//         hostNames.push(a);
//       }
//     }, this);

//     this.set('hostNameArr', hostNames.uniq());
//   },

// _replacePatternInHosts: function (rawHostNames) {
//     var start, end, extra, allHostNames = [];
//     rawHostNames.forEach(function (rawHostName) {
//       var hostNames = [];
//       start = rawHostName.match(/\[\d*/);
//       end = rawHostName.match(/\-\d*]/);
//       extra = {0: ""};

//       start = start[0].substr(1);
//       end = end[0].substr(1);

//       if (parseInt(start) <= parseInt(end, 10) && parseInt(start, 10) >= 0) {
//         this.set('isPattern', true);

//         if (start[0] == "0" && start.length > 1) {
//           extra = start.match(/0*/);
//         }

//         for (var i = parseInt(start, 10); i < parseInt(end, 10) + 1; i++) {
//           hostNames.push(rawHostName.replace(/\[\d*\-\d*\]/, extra[0].substring(0, start.length - i.toString().length) + i))
//         }

//       } else {
//         hostNames.push(rawHostName);
//       }
//       allHostNames = allHostNames.concat(hostNames);
//     }, this);

//     return allHostNames;
//   },
