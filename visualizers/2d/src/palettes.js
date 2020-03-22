var whites = ["#FFFFFF", "#F8F8F8", "#F0F0F0", "#E0E0E0", "#D8D8D8", "#D0D0D0", "#C8C8C8", "#C0C0C0", "#B8B8B8", "#B0B0B0", "#A8A8A8", "#A0A0A0", "#909090", "#888888", "#808080", "#787878", "#707070", "#686868", "#606060", "#585858"];

var violent_red = ["#700404", "#800404", "#980404", "#af0404", "#c70404", "#ea0404"];

var red_white = ["#700404", "#D0D0D0", "#800404", "#D8D8D8", "#980404", "#E0E0E0", "#af0404", "#F0F0F0", "#c70404", "#F8F8F8", "#ea0404", "#FFFFFF"];

var garden_green = ["#223311", "#224444", "#336633", "#778833", "#559955", "#88bb88", "#bbdd99", "#eeffcc", "#99ddbb", "#bbffee"];

var bella_pink = ["#F5BA9C", "#F5A49C", "#F59CAA", "#F59CC1", "#F59CD7", "#F59CED", "#FFDDCB", "#FFD0CB", "#FFCBD3", "#FFCBE0", "#FFCBED", "#FFCBFA"];

//fills a list with a desired palette
function loadPalette(palette_name) {
    if (palette_name == "violent_red") {
        palette = violent_red;
    } else if (palette_name == "garden_green") {
        palette = garden_green;
    } else if (palette_name == "whites") {
        palette = whites;
    } else if (palette_name == "red_white") {
        palette = red_white;
    } else if (palette_name == "bella_pink") {
        palette = bella_pink;
    }
    
    return palette;
}