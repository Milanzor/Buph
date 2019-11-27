/**
 *
 * @param Collection
 * @param classObj
 * @param constructorParameters
 * @param identifier
 */
module.exports = function(Collection, classObj, constructorParameters, identifier) {
    Collection.add(new classObj(constructorParameters), identifier);
    return Collection.get((identifier || classObj.name));
};
