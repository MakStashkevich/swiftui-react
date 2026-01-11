
import SwiftUI

struct FormExamplesView: View {
    @State private var enableNotifications = true
    @State private var username = ""

    var body: some View {
        NavigationView {
            Form {
                Section(header: Text("Settings")) {
                    Toggle("Enable Notifications", isOn: $enableNotifications)
                    TextField("Username", text: $username)
                }
                
                Section(header: Text("Actions")) {
                    Button("Save Changes") {
                        print("Save Changes tapped!")
                    }
                }
            }
            .navigationTitle("Form Examples")
        }
    }
}

struct FormExamplesView_Previews: PreviewProvider {
    static var previews: some View {
        FormExamplesView()
    }
}
