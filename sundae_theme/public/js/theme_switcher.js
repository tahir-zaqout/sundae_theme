frappe.provide("frappe.ui");

frappe.ui.ThemeSwitcher = class CustomThemeSwitcher extends frappe.ui.ThemeSwitcher {
    constructor() {
        super()
    }

    fetch_themes() {
		return new Promise((resolve) => {
			this.themes = [
				{
					name: "light",
					label:("Frappe Light"),
					info:("Light Theme"),
				},
				{
					name: "dark",
					label:"Timeless Night",
					info:"Dark Theme",
				},
				{
					name: "automatic",
					label:"Automatic",
					info:"Uses system's theme to switch between light and dark mode",
				},
                {
                    name:"cotton_candy",
                    label: "Cotton Candy",
                    info: "Cotton Candy Blue Theme"
                },
                {
                    name:"cherry",
                    label: "Cherry",
                    info: "Cherry Theme"
                },
                {
                    name:"apricot",
                    label: "Apricot",
                    info: "Apricot Theme"
                },
                {
                    name:"watermelon",
                    label: "Watermelon",
                    info: "watermelon Theme"
                }
			];

			resolve(this.themes);
		});
	}
}