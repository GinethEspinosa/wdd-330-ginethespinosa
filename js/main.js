const links = [
    { label: 'L01 Readings Notes', url: 'week1A/index.html', }, // you can add other tags if you like
    { label: 'L02 Readings', url: 'week1B/index.html', },
    { label: 'L03 Readings', url: 'week2A/index.html', },
    { label: 'L04 Readings', url: 'week2B/index.html', },
    { label: 'L05 Readings', url: 'week3A/index.html', },
    { label: 'L06 Readings', url: 'week3B/index.html', },
    { label: 'L07 Readings', url: 'week4A/index.html', },
    { label: 'L08 Readings', url: 'week4B/index.html', },
    { label: 'L09 Readings', url: 'week5A/index.html', },
    { label: 'L010 Readings', url: 'week5B/index.html', },
    { label: 'Project', url: 'https://abrenzink.github.io/movies_app/', },
    { label: 'Trello', url: 'https://trello.com/b/g2eL2r1l/team-4-board', },
    { label: 'Link repository SleepOutside Project', url: 'https://github.com/abrenzink/wdd330-team-4', },
    { label: 'Link  SleepOutside Project', url: 'https://abrenzink.github.io/wdd330-team-4/src/', },
    { label: 'Final Project', url: 'https://docs.google.com/document/d/1Urc7Dty4rtEU4z3C7tXhjR0kG7MCwlr2/edit', },
  ];
  
    var list = document.getElementsByTagName('ol');
  
    links.forEach(function(link){
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.text = link.label;
      a.href = link.url;
      list[0].appendChild(li);
      li.appendChild(a);
    });
  
    console.log(list);