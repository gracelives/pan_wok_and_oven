const staffTemplate = _.template(`
<div class="col-6 row p-3 <% if (right) { %>ml-3<% } %> flex-nowrap">
    <div>
        <img class="mr-3" src="<%= imgUrl %>" height="110">
    </div>
    <div>
        <% if (website) { %>
            <a href="<%= website %>">
        <% } %><h4><%= name %></h4><% if (website) { %>
            </a>
        <% } %>
        <p><a class="mb-2" href="mailto:<%= email %>"><%= email %></a></p>
        <p><%= blurb %></p>
    </div>
</div>
`);

function loadStaffHtml(staff) {
    html = "";
    for (role in staff) {
        html += `
            <h3 class="mt-4">${ role }</h3>
            <div class="d-flex flex-row flex-wrap">
        `;
        people = staff[role]
        for (i = 0; i < people.length; i++) {
            if (!people[i].website) {
                people[i].website = false;
            }
            people[i].right = i % 2 == 1;
            html += staffTemplate(people[i]);
        }
        html += `</div>`;
    }
    return html;
}

function loadStaff(staffPath) {
    var jqxhr = $.get(staffPath, (data) => {
        console.log(data);
        var html = loadStaffHtml(data);
        $("#staff-target").append($(html));
    }).fail(() => {
        alert("Could not load staff members; please try again or contact course staff.")
    });
    return jqxhr;
}

