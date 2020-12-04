export function hasProp(object, prop) {
    let res = Array.prototype.some.call(
        object.list,
        e => e.show && e.prop === prop
    )

    if (isArray(object.children)) {
        res = res || object.children.some(e => hasProp(e, prop))
    }

    return res
}

export function findItem(object, prop) {
    let res = Array.prototype.find.call(object.list, e => e.prop === prop)
    if (res) return res

    if (isArray(object.children)) {
        for (let child of object.children) {
            res = findItem(child, prop)
            if (res) break
        }
    }
    return res
}

function isArray(arr) {
    return arr && Array.isArray(arr) && arr.length > 0
}
