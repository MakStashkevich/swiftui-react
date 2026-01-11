
import SwiftUI

struct TextFieldExamplesView: View {
    @State private var textInput = ""
    @State private var secureInput = ""

    var body: some View {
        List {
            TextField("Enter text", text: $textInput)
                .textFieldStyle(RoundedBorderTextFieldStyle())
            SecureField("Enter password", text: $secureInput)
                .textFieldStyle(RoundedBorderTextFieldStyle())
            TextField("Placeholder with value", text: $textInput)
                .font(.title)
                .foregroundColor(.blue)
        }
        .navigationTitle("TextField Examples")
    }
}

struct TextFieldExamplesView_Previews: PreviewProvider {
    static var previews: some View {
        TextFieldExamplesView()
    }
}
