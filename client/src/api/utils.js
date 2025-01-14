import i18n from "../plugins/i18n"

const utils = {
  parseResponseError(err) {
    // process and return the relevant response message
    // :object err: error caught from response
    try {
      const response = err.response
      if (response.status === 400 && Object.keys(response).length) {
        const firstError = Object.entries(response.data)[0]
        return `${firstError[0]} - ${firstError[1]}`
      }
      return i18n.t("errors.genericError")
    } catch (err) {
      return i18n.t("errors.genericError")
    }
  },
}

export default utils
