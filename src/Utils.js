import data from "./status.real.json";

export const allPackages = Object.entries(data).map(item => item[1]).sort((a, b) => a.package.localeCompare(b.package));

export const pkgDependencies = currentPackage => {
    return currentPackage.split(",").map( packageName => {
        return allPackages.find( item => item.package === packageName.trim().split(" ")[0]) || packageName;;                                          
    })
}

export const reversePkgDependencies = currentPackage => {
    return allPackages.filter(newItem => newItem.depends && newItem.depends.includes(currentPackage.package.trim()))
}
