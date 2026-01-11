
import SwiftUI

struct ToggleExamplesView: View {
    @State private var isOnDefault = false
    @State private var isOnStyled = true
    @State private var isOnWithLabel = false

    var body: some View {
        List {
            Toggle("Default Toggle", isOn: $isOnDefault)
            Toggle(isOn: $isOnStyled) {
                Text("Styled Toggle")
                    .font(.headline)
                    .foregroundColor(.green)
            }
            .toggleStyle(SwitchToggleStyle(tint: .purple))
            Toggle(isOn: $isOnWithLabel) {
                Label("Toggle with Label", systemImage: "wifi")
            }
        }
        .navigationTitle("Toggle Examples")
    }
}

struct ToggleExamplesView_Previews: PreviewProvider {
    static var previews: some View {
        ToggleExamplesView()
    }
}
