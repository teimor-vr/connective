import Vue from "vue"
import i18n from "../../plugins/i18n"
import store from "../../vuex/store"

const coordinatorButtons = [
  {
    text: () => i18n.t("auth.logout"),
    icon: "mdi-export",
    onClick: () => store.dispatch("auth/logout"),
  },
  {
    text: () => i18n.t("general.profile"),
    icon: "mdi-account",
    onClick: () => Vue.$router.push({ name: "Profile" }),
  },
  {
    text: () => i18n.tc("general.school", 0),
    icon: "mdi-home",
    onClick: () => Vue.$router.push({ name: "SchoolDetails" }),
  },
  {
    text: () => i18n.t("invite.usersInvitation"),
    icon: "mdi-account-multiple-plus",
    onClick: () => Vue.$router.push({ name: "Invite" }),
  },
  {
    text: () => i18n.tc("general.program", 1),
    icon: "mdi-handshake",
    onClick: () => Vue.$router.push({ name: "ProgramsExplorer" }),
  },
]

const consumerButtons = [
  {
    text: () => i18n.t("auth.logout"),
    icon: "mdi-export",
    onClick: () => store.dispatch("auth/logout"),
  },
  {
    text: () => i18n.t("general.profile"),
    icon: "mdi-account",
    onClick: () => Vue.$router.push({ name: "ConsumerProfile" }),
  },
  {
    text: () => i18n.tc("general.program", 1),
    icon: "mdi-handshake",
    onClick: () => Vue.$router.push({ name: "ConsumerProgramsExplorer" }),
  },
]

export const userToButtons = {
  consumer: consumerButtons,
  coordinator: coordinatorButtons,
}